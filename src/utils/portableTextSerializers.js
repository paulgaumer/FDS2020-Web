import React from 'react';

// Used to transcribe and style Sanity's Portable Text format
export const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        default:
          return <p className="mb-6">{props.children}</p>;
      }
    },
  },
  marks: {
    link: ({ children, mark }) => (
      <a
        href={mark.href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b-2 border-primary hover:text-primary"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <span className="font-bold">{children}</span>,
    em: ({ children }) => <span className="italic">{children}</span>,
  },
};
