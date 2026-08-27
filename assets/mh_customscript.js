$(document).ready(function() {
    var maxHeight = 0;
    
    // Loop through each element to find the maximum height
    $('.mh-comet-technical-blog-content').each(function() {
        var currentHeight = $(this).height();
        if (currentHeight > maxHeight) {
            maxHeight = currentHeight;
        }
    });
    
    // Apply the maximum height to all elements
    $('.mh-comet-technical-blog-content').height(maxHeight);
});


$(document).ready(function() {
    var mh_product_nameMaxHeight = 0;
    
    // Loop through each .home-product-name to find the max height
    $('.home-product-name').each(function() {
        var mh_product_nameCurrentHeight = $(this).height();
        if (mh_product_nameCurrentHeight > mh_product_nameMaxHeight) {
            mh_product_nameMaxHeight = mh_product_nameCurrentHeight;
        }
    });
    
    // Apply the maximum height to all .home-product-name elements
    $('.home-product-name').height(mh_product_nameMaxHeight);
});



// document.querySelectorAll('.mob-menu ul li > a').forEach(menuItem => {
//     menuItem.addEventListener('click', function (e) {
//       // e.preventDefault();
  
//       const parentLi = this.parentElement;
  
//       // Toggle the 'open' class on the clicked menu item
//       parentLi.classList.toggle('open');
  
//       // Close all other submenus at the same level
//       parentLi.parentElement.querySelectorAll(':scope > li').forEach(sibling => {
//         if (sibling !== parentLi) {
//           sibling.classList.remove('open');
//         }
//       });
//     });
//   });


// document.addEventListener("DOMContentLoaded", () => {
//   const toggles = document.querySelectorAll(".submenu-toggle");

//   toggles.forEach((toggle) => {
//     toggle.addEventListener("click", (e) => {
//       e.stopPropagation(); // Prevent the event from bubbling up
//       const submenu = toggle.nextElementSibling; // The submenu is the next sibling
//       if (submenu) {
//         submenu.classList.toggle("open");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".submenu-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the event from bubbling up
      
      const submenu = toggle.nextElementSibling; // The submenu is the next sibling
      if (submenu) {
        submenu.classList.toggle("open");
      }
      
      toggle.classList.toggle("active"); // Toggle a class on the .submenu-toggle itself
    });
  });
});





// Hero Banner slider
$('.banner-fade-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  });

// Hero banner V2
$('.banner-fade-slider-v2').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  });

// Hero banner V3
$('.banner-fade-slider-v3').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  });

// Hero banner V4
$('.banner-fade-slider-v4').slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear'
  });

// Home New Product Slider
$('.multiple-items').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="responsive-slick-prev"><img src="https://cdn.shopify.com/s/files/1/0737/1610/5472/files/arrow-right.svg?v=1735594610"></button>',
    nextArrow: '<button type="button" class="responsive-slick-next"><img src="https://cdn.shopify.com/s/files/1/0737/1610/5472/files/arrow-right.svg?v=1735594610"></button>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 551,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
    
  });
$('.best-seller').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="responsive-slick-prev"><img src="https://cdn.shopify.com/s/files/1/0737/1610/5472/files/arrow-right.svg?v=1735594610"></button>',
    nextArrow: '<button type="button" class="responsive-slick-next"><img src="https://cdn.shopify.com/s/files/1/0737/1610/5472/files/arrow-right.svg?v=1735594610"></button>',
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 551,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
      ]
    
  });
// =======equal-height

window.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('.comet-technical-blog .comet-technical-blog-content');
    var maxHeight = 0;

    // Find the maximum height among all divs
    divs.forEach(function(div) {
        maxHeight = Math.max(maxHeight, div.offsetHeight);
    });

    // Set the minimum height for all divs
    divs.forEach(function(div) {
        div.style.minHeight = maxHeight + 'px';
    });
});


window.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('.home-new-product-content-wrpaer');
    var maxHeight = 0;

    // Find the maximum height among all divs
    divs.forEach(function(div) {
        maxHeight = Math.max(maxHeight, div.offsetHeight);
    });

    // Set the minimum height for all divs
    divs.forEach(function(div) {
        div.style.minHeight = maxHeight + 'px';
    });
});



document.addEventListener('DOMContentLoaded', () => {

// Select elements
const hamberger = document.querySelector('.hamberger');
const mobMenuCross = document.querySelector('.mob-menu-cross');
const mobHeader = document.getElementById('mob-header');

// Add event listener for the hamberger button
hamberger.addEventListener('click', () => {
  mobHeader.classList.add('show-mob-header'); // Add the class
});

// Add event listener for the mob-menu-cross button
mobMenuCross.addEventListener('click', () => {
  mobHeader.classList.remove('show-mob-header'); // Remove the class
});



document.querySelector('.hamberger').addEventListener('click', function() {
    document.documentElement.classList.add('hide-overflow'); // Adds the 'active' class to <html>
});

document.querySelector('.mob-menu-cross').addEventListener('click', function() {
    document.documentElement.classList.remove('hide-overflow'); // Removes the 'active' class from <html>
});

 });


function replaceInvalidLinks() {
    const container = document.getElementById("headeraxcvb");
    if (!container) return;

    const links = container.querySelectorAll("a[href=' '], a[href='#'], a[href='#.']");
    
    links.forEach(link => {
        const span = document.createElement("span");
        while (link.firstChild) {
            span.appendChild(link.firstChild); // Preserve inner elements like <b>
        }
        span.className = link.className; // Retain classes if any
        span.id = link.id; // Retain ID if any
        
        link.replaceWith(span);
    });
}

replaceInvalidLinks();


  