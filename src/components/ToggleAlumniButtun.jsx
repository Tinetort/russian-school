import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useContext } from 'react';

const ToggleAlumniButtun = () => {
    // This function returns the ContextAwareToggle component
    return function ContextAwareToggle({ children, eventKey, callback }) {
        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey)
        );
        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <button
                type="button"
                style={{
                    backgroundColor: 'rgb(16, 202, 240)',
                    width: '100px',
                    height: '40px',
                    border: 'none',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'background-color 0.3s ease',
                }}
                onClick={decoratedOnClick}
            >
                {isCurrentEventKey ? 'Less' : 'More'}
                {children}
            </button>
        );
    };
};

// Call ToggleAlumniButtun to get the ContextAwareToggle component
const ContextAwareToggle = ToggleAlumniButtun();

export default ContextAwareToggle;
