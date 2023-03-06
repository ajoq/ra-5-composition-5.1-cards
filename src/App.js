import './App.css';
import Card from './components/Card';

const card1 = {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    buttonText: 'Go somewhere',
    buttonLink: '#',
};

const card2 = {
    title: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content.',
    buttonText: 'Click me',
    buttonLink: '#',
};

function App() {
    return (
        <>
            <Card content={card1}>
                <img
                    src="https://damion.club/uploads/posts/2022-01/thumbs/1643002124_74-damion-club-p-okras-lisi-82.jpg"
                    alt="Fox"
                />
            </Card>
            <Card content={card2}></Card>
        </>
    );
}

export default App;
