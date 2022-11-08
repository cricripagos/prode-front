import React from "react";
import LadingPage from './landing';
import Link from 'next/link'

export default function index() {
  return (
  <div>
    <ul>
      <li>
        <Link href="/search">Home</Link>
      </li>
    </ul>
  </div>
    
  );
}
