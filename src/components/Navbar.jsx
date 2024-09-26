function Navbar() {
  return (
    <div>
      <div className="navbar bg-[#FBB702]">
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 hidden justify-center items-center w-screen font-bold lg:flex">
            <li>
              <a>ALL CATEGORIES</a>
            </li>
            <li className="font-normal">
              <a>TODAY DEALS</a>
            </li>
            <li>
              <a>ELECTRONIC</a>
            </li>
            <li>
              <a>CLOTHING</a>
            </li>
            <li>
              <a>COMPUTERS</a>
            </li>
            <li>
              <a>FURNITURES</a>
            </li>
            <li>
              <a>MOM & BABY</a>
            </li>
            <li>
              <a>BOOKS & MORE</a>
            </li>
          </ul>

          <ul className="menu menu-horizontal px-1 justify-center items-center w-screen font-bold flex lg:hidden">
            <li>
              <a>ALL CATEGORIES</a>
            </li>
            <li className="font-normal">
              <a>TODAY DEALS</a>
            </li>
            <li>
              <details>
                <summary>CATEGORIES</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a>ELECTRONIC</a>
                  </li>
                  <li>
                    <a>CLOTHING</a>
                  </li>
                  <li>
                    <a>COMPUTERS</a>
                  </li>
                  <li>
                    <a>FURNITURES</a>
                  </li>
                  <li>
                    <a>MOM & BABY</a>
                  </li>
                  <li>
                    <a>BOOKS & MORE</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
