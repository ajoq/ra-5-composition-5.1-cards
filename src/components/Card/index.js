import './index.css';
import CardImg from '../CardImg';
import CardBody from '../CardBody';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import CardButton from '../CardButton';

function Card({ children, content }) {
    return (
        <div className="card">
            {children && <CardImg img={children} />}
            <CardBody>
                <CardTitle title={content.title}>Card title</CardTitle>
                <CardText text={content.text} />
                <CardButton
                    buttonLink={content.buttonLink}
                    buttonText={content.buttonText}
                />
            </CardBody>
        </div>
    );
}

export default Card;
