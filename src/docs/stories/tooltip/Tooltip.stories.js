
import { Tooltip } from './Tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Tooltip',
    component: Tooltip,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export const TooltipWithoutTitle = {
    args: {
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>
    }
};

export const TooltipWithTitle = {
    args: {
        title: "Title",
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>
    }
};

export const TooltipNormal = {
    args: {
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>,
        variant: "normal"
    }
};

export const TooltipWarning = {
    args: {
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>,
        variant: "warning"
    }
};

export const TooltipError = {
    args: {
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>,
        variant: "error"
    }
};

export const TooltipDefaultOpen = {
    args: {
        title: "Title",
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true
    }
};

export const TooltipWarningOpen = {
    args: {
        title: "Title",
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true,
        variant: "warning"
    }
};

export const TooltipErrorOpen = {
    args: {
        title: "Title",
        body: "This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true,
        variant: "error"
    }
};

export const TooltipLongTextOpen = {
    args: {
        title: "Title",
        body: "This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true,
        alwaysOpen: true,
    }
};

export const TooltipBottom = {
    args: {
        title: "Title",
        body: "This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true,
        placement: "bottom",
        alwaysOpen: true,
    }
};

export const TooltipLeft = {
    args: {
        title: "Title",
        body: "This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true,
        placement: "left",
        alwaysOpen: true,
    }
};

export const TooltipRight = {
    args: {
        title: "Title",
        body: "This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example. This is a tooltip example.",
        children: <button>Hover on me!</button>,
        defaultIsOpen: true,
        placement: "right",
        alwaysOpen: true,
    }
};