import React from 'react';
import './Header.css';

interface HeaderProps {
  newGrade: (newGrade: number) => void;
  switchMode: (switchMode: boolean) => void;
  quizMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ newGrade, switchMode, quizMode }) => {
  return (
    <div>
      <header>
        <div>Kanjily</div>
        <button onClick={()=> switchMode(!quizMode)}>mode</button>
        <nav>
          <ul>
            <li>Grades</li>
            {(() => {
              const items = [];
              for (let i = 1; i <= 10; i++) {
                items.push(
                  <li key={i}>
                    <button onClick={() => newGrade(i)} className="nav__grades">
                      {i}
                    </button>
                  </li>
                );
              }
              return items;
            })()}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
