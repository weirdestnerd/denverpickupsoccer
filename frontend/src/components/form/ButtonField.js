import React from 'react'

const ButtonField = ({ text, onClickFn, disabled }) => {
  return (
      <div className="field">
        <div className="control">
          <button
              className="button is-primary"
              disabled={disabled}
              onClick={onClickFn}
          >
            {text}
          </button>
        </div>
      </div>
  )
}

export default ButtonField;
