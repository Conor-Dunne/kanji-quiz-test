
import './Header.css'


const Header = () => {


  return (
    <div>
      <header>
        <div>
            Kanjily
        </div>
        <nav>
        <ul>
    <li>Grades</li>
    {(() => {
          const items = [];
          for (let i = 1; i <= 10; i++) {
            items.push(<li key={i}><button className="nav__grades">{i}</button></li>);
          }
          return items;
        })()}
</ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

