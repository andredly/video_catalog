import React from 'react';

export default function Loader(props) {
  if (props.load) {
    return (
            <div className="container text-center">
                Loading...
            </div>
    );
  }
}
