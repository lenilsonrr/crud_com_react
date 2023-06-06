import { Button } from "react-bootstrap";

function LinkButton({ to, text }) {
    return (
    <>
    <Button variant="dark" href={to}>{text}</Button>
    </>
    )
}

export default LinkButton;