import data  from "../data";

const NewsList = {
  render() {
  return /*html*/`
 
      <h2 class="text-3xl font-bold my-4">Tin tức học tập</h2>
      <div class="grid grid-cols-3 gap-8">
          ${data.map((post) => /* html */`
          <div class="border border-gray-400">
              <div class=" py-4 px-5">
                  <img src="https://i.chungta.vn/2015/07/23/fpt-college-2_1437623417.jpg" class="mx-auto" alt=""
                      width="274px" height="150px">
                  <strong class="py-1.5"> <a href="#">${post.name} </a> </strong>
                  <p>${post.desc}</p>
              </div>
          </div>
  
  
          `).join("")}
  
      </div>
      <h2 class="text-3xl font-bold my-4">Tin tức học tập</h2>
      <div class="grid grid-cols-3 gap-8 pb-5">
          ${data.map((post) => /* html */`
          <div class="border border-gray-400">
              <div class=" py-4 px-5">
                  <img src="https://i.chungta.vn/2015/07/23/fpt-college-2_1437623417.jpg" class="mx-auto" alt=""
                      width="274px" height="150px">
                  <strong class="py-1.5"> <a href="#">${post.name} </a> </strong>
                  <p>${post.desc}</p>
              </div>
          </div>
  
  
          `).join("")}
  
      </div>
  
 
  `;
  },
  };
  export default NewsList;