import { Menu, Button, Flex } from 'antd';
import { Link } from 'react-router-dom';

const Menu1 = (props) => {

    return (
        <Flex style={{gap: '10px'}}>
            <Flex style={{padding: '16px 0'}}>
                <Button onClick={props.clearFav}>Clear Favorites</Button>
            </Flex>
            <Link to='/home'>
                <Button>Home</Button>
            </Link>

            <Link to='/about'>
                <Button>About</Button>
            </Link>
            
            <Link to='/comp4513-a2'>
                <Button>Logout</Button>
            </Link>
        </Flex>
    )
}

export default Menu1;