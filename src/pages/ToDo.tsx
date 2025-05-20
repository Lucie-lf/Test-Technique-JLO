import '../CSS/ToDo.css';

export default function ToDo() {
  return (
    <div className="page">
        <div className="parameter">
        </div>
        <div className="main">
            <div className="header">
                <div className="paraButton">
                </div>
                <div className="title">
                    CHECK LIST
                </div>
                <div className="navButton">
                    <a href="/done">Finished Tasks</a>
                </div>
            </div>
            <div className="body">
                <div className="listsArea">
                    <div className="cardList">
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}