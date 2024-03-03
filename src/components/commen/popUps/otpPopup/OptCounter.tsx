import { useState, useEffect } from "react";
import { useYourContext } from "../../../../context/MultiStepForm";

const OptCounter = ({ startSeconds }: { startSeconds: number }) => {
    const [seconds, setSeconds] = useState<number>(startSeconds);
  const { handlePrevious  } = useYourContext();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds: number) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    useEffect(() => {
        if (seconds <= 0) {
            handlePrevious()
        }
    }, [seconds]);

    const formatTime = (totalSeconds: number): string => {
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = totalSeconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="mx-auto text-center">
            <p className="timer-discrption">Re-envoyer dans : {" "}
                   <strong className="text-black">{formatTime(seconds)}</strong>
            </p>
        </div>
    );
}

export default OptCounter;
