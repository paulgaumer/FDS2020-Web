import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Modal from 'react-modal';
import { hasWindow } from '../../utils/hasWindow';

// Styles for the Modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const QuizModal = () => {
  const data = useStaticQuery(graphql`
    query QuizQuery {
      allSanityQuizByDepartment {
        edges {
          node {
            id
            department {
              name
            }
            answers
            question
          }
        }
      }
    }
  `);

  const [quizzes] = useState(
    data.allSanityQuizByDepartment.edges.map(({ node }) => node)
  );
  const [quizId, setQuizId] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  // Record the quiz answers in Airtable
  const url = `/.netlify/functions/sendQuizToSheet`;
  const sendtoSheet = async () => {
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        department: selectedDepartment.department.name,
        answer: selectedAnswer,
        date: new Date(),
      }),
    });
    const data = await res.status;
    return data;
  };

  useEffect(() => {
    if (hasWindow) {
      // Attach the modal to the DOM for accessibility reasons
      Modal.setAppElement('#site-layout');
      // Check if the user already answered/closed the quiz before
      const quizCookie = window.localStorage.getItem('showQuiz');
      quizCookie !== 'false' ? setIsOpen(true) : setIsOpen(false);
    }
  }, []);

  // Find the corresponding quiz object based on department id
  useEffect(() => {
    if (quizId !== null)
      setSelectedDepartment(quizzes.find((q) => q.id === quizId));
  }, [quizId]);

  // Handle user actions
  const handleDepartmentSelect = (e) => {
    setQuizId(e.currentTarget.value);
  };
  const handleAnswerSelect = (e) => {
    setSelectedAnswer(e.currentTarget.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    closeModal();
    const res = await sendtoSheet();
    // The quiz won't show up again if the answer has correctly been recorded
    res === 200 ? window.localStorage.setItem('showQuiz', 'false') : null;
  };

  function closeModal() {
    // Always hide the quiz if the user already exited the modal once
    window.localStorage.setItem('showQuiz', 'false');
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Quiz Modal"
      >
        <div className="relative flex flex-col items-center justify-between p-12 pt-16 text-gray-700">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            {/* Display the list of departments */}
            {!selectedDepartment && (
              <div className="flex flex-col space-y-4">
                <h2 className="text-xl text-center">
                  Dans quel département êtes-vous ?
                </h2>
                <div>
                  <label htmlFor="departmentSelect" aria-label="Département" />
                  <select
                    id="departmentSelect"
                    className="block w-full px-3 py-2 mt-1 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm form-select focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                    onChange={handleDepartmentSelect}
                  >
                    <option value={null}>-- Liste des départements --</option>
                    {quizzes.map((quiz) => {
                      return (
                        <option value={quiz.id} key={quiz.id}>
                          {quiz.department.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}

            {/* Display the list of possible answers */}
            {selectedDepartment && (
              <div
                data-name="answers-list"
                className="flex-col w-full space-y-8 flex-"
              >
                <h3 className="text-xl">{selectedDepartment.question}</h3>
                <div className="flex flex-col space-y-6">
                  {selectedDepartment.answers.map((answer, i) => {
                    return (
                      <div
                        className="flex items-center"
                        key={`${answer}-index-${i}`}
                      >
                        <input
                          id={`${answer}-index-${i}`}
                          value={answer}
                          name="answer"
                          type="radio"
                          className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                          checked={selectedAnswer === answer}
                          onChange={handleAnswerSelect}
                        />
                        <label
                          htmlFor={`${answer}-index-${i}`}
                          className="ml-3"
                        >
                          <span className="block text-base font-medium leading-5 text-gray-700">
                            {answer}
                          </span>
                        </label>
                      </div>
                    );
                  })}
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-sm font-bold text-center text-gray-700 uppercase rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-primary"
                >
                  Valider
                </button>
              </div>
            )}
          </form>
          <button
            type="button"
            className="absolute text-gray-400 transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:text-gray-500 top-1 right-5"
            aria-label="Close"
            onClick={closeModal}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeWnejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default QuizModal;
