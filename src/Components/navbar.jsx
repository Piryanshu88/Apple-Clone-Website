import { Flex, Image } from "@chakra-ui/react";

function Navbar() {
  return (
    <Flex className="navbar"  justifyContent='center' gap={{base:"10",md:""}}  color='#fff'  alignItems='center' >
      <Image src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_small.svg'/>

      <a href="" class='navlink'>Store</a>
      <a href="" class='navlink'>Mac</a>
      <a href="" class='navlink'>iPad</a>
      <a href="" class='navlink'>iPhone</a>
      <a href="" class='navlink'>Watch</a>
      <a href="" class='navlink'>Airpods</a>
      <a href="" class='navlink'>TV & Home</a>
      <a href="" class='navlink'>Only on Apple</a>
      <a href="" class='navlink'>Accessories</a>
      <a href="" class='navlink'>Support</a>
      <Image src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_small.svg' w='4'/>
      <Image src='https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_small.svg'/>
    </Flex>
  );
}

 export default Navbar
