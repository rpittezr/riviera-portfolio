export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row max-w-5xl p-4 text-sm">
        <p className="flex-grow">
          &copy; {new Date().getFullYear()} &middot; All rights reserved.
        </p>
        <ul className="flex flex-nowrap gap-2 text-center">
          <li>
            <a href="#" className="link font-light">
              Terms of service
            </a>
          </li>
          <li className="text-gray-500">&middot;</li>
          <li>
            <a href="#" className="link font-light">
              Privacy policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
