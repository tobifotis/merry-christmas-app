const Message = ({ count }) => {

    let message = '';
    let message2 = '';
    switch (count) {
        case 0:
            message = 'You get nothing from Santa';
            message2 = 'You were on the naughty list';
            break;
        case 1:
            message = 'You get A present from Santa';
            message2 = 'You were good this year';
            break;
        default:
            message = `You get ${count} presents from Santa`;
            message2 = 'You were good this year';
            break;
    }

    return (
        <>
            <h4>{message}</h4>
            <p>{message2}</p>
        </>
    );
};

export default Message;
