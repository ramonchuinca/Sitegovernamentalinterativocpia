'use client';

import { useEffect, useState } from 'react';

interface EncryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';

export function EncryptedText({
  text,
  speed = 40,
  className = '',
}: EncryptedTextProps) {

  const [displayText, setDisplayText] = useState('');

  useEffect(() => {

    let iteration = 0;

    const interval = setInterval(() => {

      setDisplayText(() => {

        return text
          .split('')
          .map((letter, index) => {

            if (index < iteration) {
              return text[index];
            }

            return CHARS[
              Math.floor(Math.random() * CHARS.length)
            ];
          })
          .join('');
      });

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 2;

    }, speed);

    return () => clearInterval(interval);

  }, [text, speed]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
}