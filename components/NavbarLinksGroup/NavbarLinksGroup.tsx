import { useState } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { IconCalendarStats, IconChevronRight } from '@tabler/icons-react';
import { Box, Collapse, Group, rem, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: Url;
}

export function LinksGroup({ icon: Icon, label, link, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);
  const items = (hasLinks ? links : []).map((link) => (
    <Text<'a'>
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Text>
  ));

  const labelElm = (
    <Box style={{ display: 'flex', alignItems: 'center' }}>
      <ThemeIcon variant="light" size={30}>
        <Icon style={{ width: rem(18), height: rem(18) }} />
      </ThemeIcon>
      <Box ml="md">{label}</Box>
    </Box>
  );

  const buttonElm = (
    <>
      <UnstyledButton onClick={() => setOpened((o) => !o)} className={classes.control}>
        <Group justify="space-between" gap={0}>
          {labelElm}

          {hasLinks && (
            <IconChevronRight
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(-90deg)' : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );

  const finalElm =
    !hasLinks && link ? (
      <Link style={{ textDecoration: 'none', color: 'inherit' }} href={link}>
        {buttonElm}
      </Link>
    ) : (
      buttonElm
    );

  return <>{finalElm}</>;
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
};

export function NavbarLinksGroup() {
  return (
    <Box mih={220} p="md">
      <LinksGroup {...mockdata} />
    </Box>
  );
}
