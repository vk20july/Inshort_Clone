
import {AppBar,Toolbar,styled} from '@mui/material';
import {Menu} from '@mui/icons-material';//this is named import
//two types of import
//.default import ->copy from material ui
//.named import ->you can change the name after copy

const StyledHeader= styled(AppBar)`
    background: #fff;
    height: 70px;
`
const MenuIcon= styled(Menu)`
    color: #000;
`
const Image= styled('img')({
    height: 55,
    margin: 'auto',
    paddingRight: 70
})
const Header=()=>{
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return(
        <StyledHeader position='static'>
            <Toolbar>
                <MenuIcon/>
                <Image src={url} alt="logo"/>;
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
