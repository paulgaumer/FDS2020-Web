import React from 'react';
import SectionWrapper from '../../layout/sectionWrapper';
import SectionContainer from '../../layout/sectionContainer';
import SectionTitle from '../../global/sectionTitle';
import Testimonial from './testimonial';

const TopSection = () => {
  return (
    <SectionWrapper>
      <SectionContainer customClasses="py-20">
        <SectionTitle text="La Fête de la Science 2020" />
        <div>
          <p className="leading-7 tracking-wide text-gray-700">
            Tellus velit praesent tortor felis et tempus sed, ligula sapien
            bibendum commodo congue hendrerit augue, at etiam vivamus in varius
            per. Massa et donec nostra nisl vel tempor natoque, imperdiet
            ultrices cum molestie inceptos interdum lorem luctus, scelerisque
            sociis eros amet dapibus dolor. Purus litora ornare phasellus quam
            lacus magna rutrum, iaculis viverra quis dapibus parturient euismod
            ac consectetur, natoque in eget odio conubia id. Ornare himenaeos
            pharetra diam aptent laoreet dui proin curae dis habitasse, sociis
            blandit tincidunt rhoncus malesuada etiam mus ridiculus natoque
            bibendum, arcu faucibus auctor morbi egestas gravida sit facilisi
            parturient. Mus nulla natoque tempor malesuada scelerisque conubia
            venenatis taciti fames, habitasse a mollis per ullamcorper auctor
            pretium eu ante netus, montes quisque at proin suspendisse tortor
            pulvinar dolor. Dui himenaeos auctor rhoncus consectetur sociosqu
            suscipit est class vulputate ipsum felis pulvinar, facilisi
            porttitor nam ridiculus taciti pharetra potenti diam nisl fusce. Ac
            potenti curabitur condimentum netus habitasse nascetur ornare fames
            parturient purus tellus in, augue elit risus varius platea neque
            ipsum proin magnis scelerisque enim. Congue eget duis fringilla
            felis magnis orci turpis eleifend, tempor netus bibendum mi luctus
            sodales suscipit odio, consectetur nec justo cum at per aliquam.
            Sociosqu pellentesque mi eleifend sit sed sodales fusce vehicula
            iaculis enim, condimentum montes curabitur porttitor bibendum
            fringilla nunc ornare lobortis ac, proin vivamus tincidunt imperdiet
            etiam faucibus dolor ridiculus morbi. Molestie suspendisse in
            tincidunt eleifend imperdiet tempor, pulvinar nunc pellentesque
            taciti sem egestas, inceptos cum parturient potenti enim. Ligula
            fames fusce natoque montes condimentum turpis enim taciti gravida
            sodales, consequat torquent nec feugiat cum lobortis lacinia
            habitasse potenti ridiculus auctor, dolor at viverra erat morbi
            penatibus scelerisque blandit placerat.
          </p>
        </div>
        <div
          data-name="testimonials"
          className="flex flex-col py-20 space-y-24"
        >
          <Testimonial />
          <Testimonial reverse={true} />
        </div>
      </SectionContainer>
    </SectionWrapper>
  );
};

export default TopSection;
