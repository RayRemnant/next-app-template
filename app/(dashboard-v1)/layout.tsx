'use client';

import React, { useState } from 'react';
import {
  IconChevronDown,
  IconHeart,
  IconLogout,
  IconMessage,
  IconPlayerPause,
  IconSettings,
  IconStar,
  IconSwitchHorizontal,
  IconTrash,
} from '@tabler/icons-react';
import {
  AppShell,
  Avatar,
  Burger,
  Container,
  Group,
  Menu,
  rem,
  Tabs,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { ActionToggle } from '@/components/ActionToggle/ActionToggle';
import { HeaderTabs } from '@/components/HeaderTabs/HeaderTabs';
import { NavbarNested } from '@/components/NavbarNested/NavbarNested';
import { UserDropdownMenu } from '@/components/UserDropdownMenu/UserDropdownMenu';
import { theme } from '@/theme';

const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
  'Home',
  'Orders',
  'Education',
  'Community',
  'Forums',
  'Support',
  'Account',
  'Helpdesk',
];

export default function Demo({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group justify="space-between" h="100%" px={10}>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
            LOGO
          </Group>
          <Group>
            <UserDropdownMenu />

            <ActionToggle />
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavbarNested relativePath="" />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
