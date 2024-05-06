import './styles.css';
import NPXIcon from './npx.png';
import SVGIcon from './icon.svg';

export const App = () => {
    return (
        <>
            <h1>manually configuring webpack {process.env.NODE_ENV}</h1>
            <img src={NPXIcon} width={400} height={200} />
            {process.env.name}``
            <img src={SVGIcon} width={400} height={200} />
        </>
    )
}