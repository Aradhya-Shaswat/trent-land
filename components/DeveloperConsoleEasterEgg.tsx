'use client';

import { useEffect } from 'react';

export default function DeveloperConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      '%cCuriosity killed the cat! %ccareers@trentarev.com / api.trentarev.com',
      'color: #1c1a18; font-size: 14px; font-weight: bold; background: #f7f6f3; padding: 4px;',
      'color: #23ec1c; font-size: 14px; padding: 4px;'
    );
  }, []);

  return null;
}
