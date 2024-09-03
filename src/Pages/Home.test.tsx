import { render, screen, fireEvent } from '@testing-library/react';
import { MainContent } from './styled';
import '@testing-library/jest-dom';
import App from './Home';

// Mock
jest.mock('../Components/Appbar/Appbar', () => () => <div>AppBarComponent</div>);
jest.mock('../Components/Table/Table', () => () => <div>ComparationTable</div>);
jest.mock('../Components/TitleSection/TitleSection', () => ({ title }: { title: string }) => <div>{title}</div>);
jest.mock('../Components/Appbar/Appbar', () => ({ onDrawerToggle }: { onDrawerToggle: (open: boolean) => void }) => (
    <button onClick={() => onDrawerToggle(true)}>Open Drawer</button>
));

// Checks page rendering, height and background color
describe('Styled Components', () => {
    test('MainContent should render in the right color and size', () => {
        const { container } = render(<MainContent />);
        const mainContent = container.firstChild as HTMLElement;

        // Height
        expect(mainContent).toHaveStyle('min-height: 100vh');

        // Color
        expect(mainContent).toHaveStyle('background-color: #F8F8F8');
    });
});


// Check if the Navbar is rendered and works
describe('App Component', () => {
    test('drawerOpen starts as false and changes to true when drawer is opened', () => {
        const { container } = render(<App />);

        fireEvent.click(screen.getByText('Open Drawer'));

        // Waiting to make sure the status has been updated
        setTimeout(() => {
        // checks that the drawer is now open (drawerOpen is true)
            expect(container.querySelector('div')).toHaveStyle('margin-left: 250px');
        }, 300);
    });
});


//Checks that the title and table are being rendered
describe('App Component', () => {
    beforeEach(() => {
        render(<App />);
    });

    describe('Title Section', () => {
        test('renders and displays Comparison title', () => {
            // Check that the section title is present
            expect(screen.getByText('Comparison')).toBeInTheDocument();
        });
    });

    describe('Table Rendering', () => {
        test('renders and displays ComparationTable', () => {
            // Checks that the ComparisonTable component is rendered
            expect(screen.getByText('ComparationTable')).toBeInTheDocument();
        });

    });
});

