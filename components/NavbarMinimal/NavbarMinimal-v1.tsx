'use client';

import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconDiamond,
  IconDownload,
  IconFileInvoice,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from '@tabler/icons-react';
import { Center, rem, Stack, Tooltip, UnstyledButton } from '@mantine/core';
//import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarMinimal.module.css';

interface NavbarLinkProps {
  icon: typeof IconHome2;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Panoramica dei conti' },
  { icon: IconDiamond, label: 'Premium' },
  { icon: IconUser, label: 'Profilo' },
  { icon: IconFileInvoice, label: 'Fatturazione' },
  { icon: IconDownload, label: 'Downloads' },
];

export function NavbarMinimalV1() {
  const [active, setActive] = useState(2);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <Center>
        <p>Hello</p>
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink icon={IconSwitchHorizontal} label="Change account" />
        <NavbarLink icon={IconLogout} label="Logout" />
      </Stack>
    </nav>
  );
}
