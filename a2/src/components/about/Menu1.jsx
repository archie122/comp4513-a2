import { Menu, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';


const Menu1 = () => {

    return (
        <Flex style={{gap: '10px'}}>
            <Link to='/home'>
                <Button>Home</Button>
            </Link>

            <Link to='/favorite'>
                <Button>Favorite</Button>
            </Link>
            
            <Link to='/comp4513-a2'>
                <Button>Logout</Button>
            </Link>
        </Flex>
    )
}

export default Menu1;