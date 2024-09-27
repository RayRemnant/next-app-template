'use client';

import { IconCheck, IconClock, IconFlag } from '@tabler/icons-react';
import {
  Badge,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Image,
  List,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

type PricingCardProps = {
  title: string;
  icon: JSX.Element;
  description: string;
  features: string[];
  badgeText: string;
  secondaryButton: { text: string };
  highlighted?: boolean;
};

const PricingCard = ({
  title,
  icon,
  description,
  features,
  badgeText,
  secondaryButton,
  highlighted = false,
}: PricingCardProps) => (
  <Card
    shadow="sm"
    padding="lg"
    radius="md"
    withBorder={highlighted}
    maw="30rem"
    style={{ height: '100%', display: 'flex', flexDirection: 'column' }} // Make card full height and flexible
  >
    {/* Image Section */}
    <Card.Section>
      <Image
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
        height={160}
        alt="Pricing Plan Image"
      />
    </Card.Section>

    {/* Title and Badge */}
    <Group justify="center" mt="md" mb="xs">
      <Title order={3}>{title}</Title>
    </Group>

    <Group align="center" justify="center">
      <Badge color={highlighted ? 'blue' : 'gray'}>{badgeText}</Badge>
    </Group>

    <Divider my="sm" />
    {/* Features List */}
    <List
      spacing="sm"
      size="sm"
      fw={500}
      icon={<IconCheck alignmentBaseline="central" size="1rem" />}
      style={{ flex: 1 }} // Ensure the list grows to fill space
      center
    >
      {features.map((feature, index) => (
        <List.Item key={index}>{feature}</List.Item>
      ))}
    </List>
    <Divider my="sm" />

    <Button variant="outline" color={highlighted ? 'blue' : 'gray'} fullWidth mt="sm" radius="md">
      {secondaryButton.text}
    </Button>
  </Card>
);

export default function PricingSection() {
  return (
    <Group justify="center" align="start" grow>
      <PricingCard
        title="PROVA GRATUITA"
        icon={<IconClock size={32} />}
        description="Opera a mercato senza rischiare nulla"
        features={[
          "Non fornisce nessuna idoneità all'Account",
          '14 Giorni',
          "Analisi dell'account basilari",
          'Applicazioni limitate',
        ]}
        badgeText="Migliora le tue skill"
        secondaryButton={{ text: 'Prova Gratis' }}
      />
      <PricingCard
        title="CHALLENGE"
        icon={<IconFlag size={32} />}
        description="Mostraci le tue capacità di trading. Supera l'Evaluation Process e ricevi un Account!"
        features={[
          'Ti forniamo un Account fino a $200.000',
          'Dimostra le tue capacità nel trading',
          'Analisi completa del conto',
          'Applicazioni Premium',
        ]}
        badgeText="Account fino a $200.000"
        secondaryButton={{ text: 'Avvia la Challenge' }}
        highlighted={true}
      />
    </Group>
  );
}
