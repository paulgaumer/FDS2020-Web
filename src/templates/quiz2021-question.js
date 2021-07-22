import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/layout/seo';
import SectionWrapper from '../components/layout/sectionWrapper';
import SectionContainer from '../components/layout/sectionContainer';
import SectionTitle from '../components/global/sectionTitle';
import QuestionSection from '../components/sections/quiz2021/questionSection';

const Quiz2021Question = ({ pageContext, data }) => {
  const { sectionTitle, _rawQuestions } = data.sanityQuiz2021;
  const { questionKey, questionNumber } = pageContext;
  const question = _rawQuestions.find((q) => q._key === questionKey);
  const totalQuestion = _rawQuestions.length;

  return (
    <Layout>
      <SEO title={`Quiz 2021`} />
      <SectionWrapper>
        <SectionContainer customClasses="pt-16 pb-20 md:py-20 lg:pt-32 lg:pb-40">
          <SectionTitle text={sectionTitle} />
          {!question && <p>Question introuvable</p>}
          {question && (
            <QuestionSection
              question={question}
              questionNumber={questionNumber}
              totalQuestion={totalQuestion}
            />
          )}
        </SectionContainer>
      </SectionWrapper>
    </Layout>
  );
};

export default Quiz2021Question;

export const query = graphql`
  query Quiz2021Question {
    sanityQuiz2021 {
      sectionTitle
      _rawQuestions
    }
  }
`;
