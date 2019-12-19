import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearState } from '../store/actions';

function BackButton({ clear }) {
  return (
        <Link to="/" onClick={clear}>
            <button className="navbar-toggler" type="button">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </Link>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clearState()),
});

export default connect(null, mapDispatchToProps)(BackButton);
