import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    StackDivider,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorMode,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MoonIcon,
    SunIcon
    } from '@chakra-ui/icons';
import { Link as ReachLink } from "react-router-dom"; 

const NAV_ITEMS = [
    {
        label: 'Trade',
        href: 'trade',
    },
    {
        label: 'Governance',
        href: 'governance',
    },
];

export default function AppBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onToggle } = useDisclosure();

    const buttonColours = {
        linkColor: useColorModeValue('gray.600', 'gray.200'),
        linkHoverColor: useColorModeValue('gray.200', 'gray.800'),
        popoverContentBgColor: useColorModeValue('white', 'gray.800'),
        menuItemHoverColor: useColorModeValue('gray.600', 'gray.200'),
    };

    return (
        <Box>
            <Flex
                bg={useColorModeValue('gray.50', 'gray.700')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                flex={{ base: 1, md: 'auto' }}
                ml={{ base: -2 }}
                display={{ base: 'flex', md: 'none' }}>
                <IconButton
                    onClick={onToggle}
                    icon={
                    isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <Text
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    fontFamily={'heading'}
                    color={useColorModeValue('gray.800', 'white')}>
                    ZilTeam6
                </Text>

                <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                    <DesktopNav {...buttonColours} />
                </Flex>
                </Flex>

                <Stack
                flex={{ base: 1, md: 0 }}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}>
                <Button onClick={toggleColorMode}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
                <Button
                    as={'a'}
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'outline'}
                    href={'#'}
                    rightIcon={<ChevronRightIcon />}>
                    Connect Wallet
                </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav theme={buttonColours} menuToggle={onToggle}/>
            </Collapse>
        </Box>
    );
}

const DesktopNav = (theme) => {
    return (
        <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                <Link
                    p={2}
                    as={ReachLink}
                    to={navItem.href ?? '#'}
                    fontSize={'sm'}
                    fontWeight={500}
                    rounded={'md'}
                    color={theme.linkColor}
                    _hover={{
                    textDecoration: 'none',
                    bg: theme.menuItemHoverColor,
                    color: theme.linkHoverColor
                    }}>
                    {navItem.label}
                </Link>
                </PopoverTrigger>
            </Popover>
            </Box>
        ))}
        </Stack>
    );
};

const MobileNav = ({theme, menuToggle}) => {
    return (
        <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
            <MobileNavItem label={navItem.label} href={navItem.href} theme={theme} 
            menuToggle={menuToggle}/>
        ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, href, theme, menuToggle }) => {

    return (
        <Flex
            py={2}
            px={2}
            as={ReachLink}
            to={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            onClick={menuToggle}
            _hover={{
            textDecoration: 'none',
            bg: theme.menuItemHoverColor,
            color: theme.linkHoverColor
            }}>
            <Text
            fontWeight={600}>
            {label}
            </Text>
        </Flex>
    );
};