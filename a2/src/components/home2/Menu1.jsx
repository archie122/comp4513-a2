import { Menu, Button, Flex } from 'antd';

const options = ['Favorite', 'About', 'Login'].map((key) => ({
    key,
    label:  `${key}`,
  }));




const Menu1 = () => {

    return (
        <Flex style={{gap: '10px'}}>
            <Button>Favorite</Button>
            <Button>About</Button>
            <Button>Login</Button>
        </Flex>
    )
}

export default Menu1;