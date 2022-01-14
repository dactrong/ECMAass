const Header = {
    render() {
        return ` <div class="bg-blue-900 py-4">
        <a href="">
          <img src="https://lms.poly.edu.vn/image/logo.png" class="mx-auto" alt="" width="150px" height="50px">
        </a>
      </div>
      <div class="bg-orange-600 flex px-4 py-3  ">
        <ul class="flex   ">

          <li class="px-6  "><a href="/home" class=" text-sm  hover:border-b-2 text-white ">Home page</a></li>
          <li class="px-6  "><a href="/about" class=" text-sm  hover:border-b-2 text-white ">About</a></li>
          <li class="px-6  "><a href="/product" class=" text-sm  hover:border-b-2 text-white ">Product</a></li>
          <li class="px-6  "><a href="/contact" class=" text-sm  hover:border-b-2 text-white ">Contact</a></li>
          <li class="px-6  "><a href="/signin" class=" text-sm  hover:border-b-2 text-white ">SingnIn</a></li>
          <li class="px-6  "><a href="/signup" class=" text-sm  hover:border-b-2 text-white ">SingnUp</a></li>
         
        </ul>

        <div class="pl-25">
          <form action="" class=" float-right">
            <input type="text" class=" py-px ">
            <input type="submit" value="TÌM KIẾM"
              class="border-black border rounded-0.3xl px-1 py-1  text-xs px-2 bg-sky-700 text-white">
          </form>
        </div>


      </div>`;
    },
};
export default Header;