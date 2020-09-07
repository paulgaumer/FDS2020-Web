import React, { useEffect, useState } from 'react';
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
  const [modalIsOpen, setIsOpen] = useState(true);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    if (hasWindow) {
      // Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
      Modal.setAppElement('#site-layout');
    }
  }, []);

  const handleDepartmentSelect = (e) => {
    setSelectedDepartment(e.currentTarget.value);
  };
  const handleAnswerSelect = (e) => {
    setSelectedAnswer(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(selectedAnswer);
    closeModal();
  };

  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative flex flex-col items-center justify-between p-12 text-gray-700">
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            {!selectedDepartment && (
              <div className="flex flex-col space-y-4">
                <h2 className="text-center">
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
                    <option value="44">Loire Atlantique</option>
                    <option value="49">Maine et Loire</option>
                    <option value="53">Mayenne</option>
                    <option value="72">Sarthe</option>
                    <option value="85">Vendée</option>
                  </select>
                </div>
              </div>
            )}

            {selectedDepartment && (
              <div
                data-name="answers-list"
                className="flex-col w-full space-y-8 flex-"
              >
                <h3 className="text-sm">
                  Comment avez-vous connu la Fête de la Science 2020 ?
                </h3>
                <div className="flex flex-col space-y-6">
                  <div className="flex items-center">
                    <input
                      id="q1"
                      value="q1"
                      name="answer"
                      type="radio"
                      className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                      checked={selectedAnswer === 'q1'}
                      onChange={handleAnswerSelect}
                    />
                    <label htmlFor="q1" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Answer 1
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="q2"
                      value="q2"
                      name="answer"
                      type="radio"
                      className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                      checked={selectedAnswer === 'q2'}
                      onChange={handleAnswerSelect}
                    />
                    <label htmlFor="q2" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Answer 2
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="q3"
                      value="q3"
                      name="answer"
                      type="radio"
                      className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-radio"
                      checked={selectedAnswer === 'q3'}
                      onChange={handleAnswerSelect}
                    />
                    <label htmlFor="q3" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Answer 3
                      </span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-3 py-2 text-sm font-bold text-center text-gray-900 uppercase rounded focus:outline-none focus:shadow-outline-blue focus:border-blue-300 bg-primary"
                >
                  Valider
                </button>
              </div>
            )}
          </form>
          <button
            onClick={closeModal}
            className="absolute text-sm top-1 right-5 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          >
            Fermer
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default QuizModal;
