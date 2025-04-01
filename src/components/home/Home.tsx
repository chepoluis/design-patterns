import './Home.css';
import { patterns } from '../../lib/patterns';
import { PatternCard } from '../common/patternCard/PatternCard';

export default function Home() {
  return (
    <div className='container'>
      <div className='home-header'>
        <h1>Design Patterns</h1>
        <p>A collection of design patterns I've studied and implemented</p>
      </div>
      <div className='patterns-grid'>
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>
    </div>
  );
}
