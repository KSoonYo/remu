/* eslint-disable  */
import { useState, useEffect, useRef } from "react";
import BodyText from "@enact/ui/BodyText";
import { NOTES, NOTES_VALUES } from "../data/notevalues";
import AudioStyles from "./AudioMaker.module.css";

const getFrequency = (note) => {
  return NOTES_VALUES[note] || 440.0;
};

const AudioMaker = () => {
  const [octave, setOctave] = useState(1);
  const [context, setContext] = useState(null);
  const [pressedNote, setPressedNote] = useState("");
  const [text, setText] = useState("Press Your number Key!");

  const soundMusic = (keyCode) => {
    if (!context) {
      return;
    }
    const note = NOTES[octave][keyCode % 48];
    setPressedNote(note);
    setText("");

    const oscillator = context.createOscillator(); // create Oscillator node
    const gainNode = context.createGain(); // create Gain node
    oscillator.type = "triangle";
    oscillator.frequency.value = getFrequency(note);
    oscillator.connect(gainNode);

    gainNode.connect(context.destination);
    oscillator.start(0);
    gainNode.gain.exponentialRampToValueAtTime(
      0.00001,
      context.currentTime + 2
    );
    oscillator.stop(context.currentTime + 2);
  };

  const keyHanlder = (event) => {
    const { keyCode } = event;
    switch (keyCode) {
      case 38:
        // arrow up
        setOctave((prev) => (prev + 1) % 3 || 3);
        setText("key up!");
        return;
      case 40:
        // arrow down
        setOctave((prev) => prev - 1 || 1);
        setText("key down!");
        return;
    }
    if (keyCode >= 48 && keyCode <= 57) {
      soundMusic(keyCode);
    }
  };

  const keyHanlderRef = useRef(keyHanlder);

  useEffect(() => {
    keyHanlderRef.current = keyHanlder;
  });

  useEffect(() => {
    if (context) {
      const handler = (e) => keyHanlderRef.current(e);
      window.addEventListener("keyup", handler);
    } else {
      const Context = window.AudioContext || window.webkitAudioContext;
      const context = new Context();
      setContext(context);
    }
    return () => {
      window.removeEventListener("keyup", keyHanlderRef.current);
    };
  }, [context]);

  return (
    <BodyText className={AudioStyles.textBox} centered={true} component={"div"}>
      <p> Key + {octave} </p>
      <p>{text}</p>
      <p>{pressedNote}</p>
    </BodyText>
  );
};

export default AudioMaker;
