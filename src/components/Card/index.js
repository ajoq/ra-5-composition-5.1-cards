import './index.css';

function Card({ children, content }) {
    return (
        <div className="card">
            {children && <div className="card-img">{children}</div>}
            <div className="card-body">
                <h5 className="card-title">{content.title}</h5>
                <p className="card-text">{content.text}</p>
                <a href={content.buttonLink} className="btn">
                    {content.buttonText}
                </a>
            </div>
        </div>
    );
}

export default Card;
