import { link } from 'fs';
import {
  IconAdjustments,
  IconCalendarStats,
  IconDiamondFilled,
  IconDownload,
  IconFileAnalytics,
  IconFileInvoice,
  IconGauge,
  IconHomeFilled,
  IconLock,
  IconMessages,
  IconNotes,
  IconPresentationAnalytics,
  IconTools,
  IconUser,
} from '@tabler/icons-react';
import { Button, Code, Container, Flex, Group, rem, ScrollArea } from '@mantine/core';
import { ActionToggle } from '../ActionToggle/ActionToggle';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { Logo } from './Logo';
import classes from './NavbarNested.module.css';

//TODO: highlight active link

const mockdata = [
  { label: 'Panoramica dei conti', icon: IconHomeFilled, link: 'account-overview' },
  {
    label: 'Premium',
    icon: IconDiamondFilled,
  },
  { label: 'Profilo', icon: IconUser, link: 'profile' },
  { label: 'Fatturazione', icon: IconFileInvoice },
  { label: 'Downloads', icon: IconDownload },
  {
    label: 'Strumenti e servizi',
    icon: IconTools,
    links: [
      { label: 'Calendario Economico', link: '/calendario-economico' },
      { label: 'Simboli e aggiornamenti', link: '/simboli-e-aggiornamenti' },
      { label: 'Ticker', link: '/ticker' },
      { label: 'Analisi del trader', link: '/analisi-del-trader' },
      { label: 'Calcolatore di fusi orari', link: '/calcolatore-di-fusi-orari' },
      { label: 'Accordi di partnership', link: '/accordi-di-partnership' },
      { label: "Simulatore dell'equity", link: '/simulatore-dell-equity' },
      { label: 'App di statistica', link: '/app-di-statistica' },
      { label: 'Calcolatore del margine', link: '/calcolatore-del-margine' },
      { label: 'Calcolatore del pip', link: '/calcolatore-del-pip' },
      { label: 'Mentor app', link: '/mentor-app' },
      { label: 'Performance Coaching', link: '/performance-coaching' },
    ],
  },
  {
    label: 'Supporto',
    icon: IconMessages,
    links: [
      { label: 'Invia un messaggio', link: '/invia-messaggio' },
      { label: 'Chat Live', link: '/chat-live' },
      { label: 'Discord', link: '/discord' },
    ],
  },
];

export function NavbarNested({ relativePath }: { relativePath: string }) {
  const links = mockdata.map((item) => {
    //item.link = relativePath + item.link;
    return <LinksGroup {...item} key={item.label} />;
  });

  return (
    <nav className={classes.navbar}>
      {/*    <div className={classes.header}>
          <Group justify="space-between">
            <Logo style={{ width: rem(120) }} />
            <Code fw={700}>v3.1.2</Code>
          </Group>
        </div>
       */}
      <Button>Nuova challenge</Button>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      <Flex p="1rem" justify="center">
        <ActionToggle />
      </Flex>
    </nav>
  );
}
