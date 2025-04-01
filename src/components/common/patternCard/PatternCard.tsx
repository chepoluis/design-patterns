import { useNavigate } from 'react-router-dom';
import { Pattern } from '../../../lib/patterns';
import './PatternCard.css';

interface PatternCardProps {
  pattern: Pattern;
}

export function PatternCard({ pattern }: PatternCardProps) {
  const navigate = useNavigate();

  return (
    <div className='pattern-card' onClick={() => navigate(pattern.id)}>
      <div className='pattern-card-header'>
        <h2 className='pattern-card-title'>{pattern.name}</h2>
        <span
          className={`pattern-card-badge ${pattern.category.toLowerCase()}`}
        >
          {pattern.category}
        </span>
      </div>
      <div className='pattern-card-short-desc'>{pattern.shortDescription}</div>
      <div className='pattern-card-content'>
        <p>{pattern.description}</p>
      </div>
      <div className='pattern-card-footer'>
        <div
          className={`pattern-status ${
            pattern.implemented ? 'implemented' : 'in-progress'
          }`}
        >
          {pattern.implemented ? 'Implemented' : 'In progress'}
        </div>
        <button className='view-details-btn'>
          View details
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M5 12h14M12 5l7 7-7 7' />
          </svg>
        </button>
      </div>
    </div>
  );
}
