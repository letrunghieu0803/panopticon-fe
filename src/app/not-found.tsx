import { Button } from 'antd';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center p-24">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
