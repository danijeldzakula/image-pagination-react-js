import React from 'react';

const Pagination = ({ current, onPrev, onNext, onTarget, numbers }) => {
  return (
    <div className='pagination grid'>
        <ul>
            <button onClick={() => onPrev()} disabled={`${current <= 1 ? 'disabled' : ''}`}>
              Prev
            </button>

            {numbers.map((number, id) => {
              return (
                <li key={id} onClick={() => onTarget(number)} className={`${current === number ? 'is-active' : ''}`}>
                  <span>{number}</span>
                </li>
              )
            })}

            <button onClick={() => onNext()} disabled={`${current === numbers.length ? 'disabled' : ''}`}>
              Next
            </button>
        </ul>
    </div>
  )
}

export default Pagination;