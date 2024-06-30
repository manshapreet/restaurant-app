import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import './Menu.css'
import menuList from '../../data/menuitems.json'


// const menuList = {
//       appetizers: [
//         {
//           name: "Spring Rolls",
//           description: "Crispy rolls stuffed with fresh vegetables",
//           price: 5.99,
//           image: "https://plus.unsplash.com/premium_photo-1663850685017-10929f5f5409?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaW5nJTIwcm9sbHN8ZW58MHx8MHx8fDA%3D"
//         },
//         {
//           name: "Garlic Bread",
//           description: "Toasted bread with garlic and butter",
//           price: 3.99,
//           image: "https://images.unsplash.com/photo-1593527270723-834c53a3fed4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDI%3D"
//         }
//       ],
//       maincourses: [
//         {
//           name: "Grilled Chicken",
//           description: "Succulent grilled chicken served with vegetables",
//           price: 12.99,
//           image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoaWNrZW58ZW58MHx8MHx8fDI%3D"
//         },
//         {
//           name: "Vegetarian Lasagna",
//           description: "Layers of pasta with vegetables and cheese",
//           price: 10.99,
//           image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dmVnZXRhcmlhbiUyMGxhc2FnbmF8ZW58MHx8MHx8fDI%3D"
//         }
//       ],
//       desserts: [
//         {
//           name: "Chocolate Cake",
//           description: "Rich chocolate cake with a molten center",
//           price: 6.99,
//           image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8Mg%3D%3D"
//         },
//         {
//           name: "Cheesecake",
//           description: "Classic cheesecake with a graham cracker crust",
//           price: 5.99,
//           image: "https://images.unsplash.com/photo-1545396635-011a9a6a5650?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZWVzZSUyMGNha2V8ZW58MHx8MHx8fDI%3D"
//         }
//       ],
//       drinks: [
//         {
//           name: "Coca Cola",
//           description: "Refreshing cola beverage",
//           price: 1.99,
//           image: "https://images.unsplash.com/photo-1711154319702-8b80f6ce3505?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29jYSUyMGNvbGElMjBnbGFzc3xlbnwwfHwwfHx8Mg%3D%3D"
//         },
//         {
//           name: "Orange Juice",
//           description: "Freshly squeezed orange juice",
//           price: 2.99,
//           image: "https://images.unsplash.com/photo-1618046364546-81e9d03d39a6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9yYW5nZSUyMGp1aWNlfGVufDB8fDB8fHwy"
//         }
//       ]
//     }


const Menu = () => {
  return (
    <div className='Menu'>

        <div className='MenuHead'>Our Menu</div>

        <div className=''>
            <div className='menuTitle'>Appetizers</div>
            <div className='menuCategory'>

            {menuList.filter(list => list.category === "appetizers" ).map((item, i) => 
                    <MenuItem item={item} key={i}/>
                )}
            </div>
        </div>

        <div className=''>
            <div className='menuTitle'>Main Course</div>
            <div className='menuCategory'>
              {menuList.filter(list => list.category === "maincourses" ).map((item, i) => 
                    <MenuItem item={item} key={i}/>
                )}
            </div>
        </div>

        <div >
            <div className='menuTitle'>Desserts</div>
            <div className='menuCategory'>
              {menuList.filter(list => list.category === "desserts" ).map((item, i) => 
                    <MenuItem item={item} key={i}/>
                )}
            </div>
        </div>

        <div>
            <div className='menuTitle'>Drinks</div>
            <div className='menuCategory'>
              {menuList.filter(list => list.category === "drinks" ).map((item, i) => 
                    <MenuItem item={item} key={i}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Menu