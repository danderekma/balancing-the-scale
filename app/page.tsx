"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  useMantineColorScheme,
  AppShell,
  Title,
  Container,
  Flex,
  ActionIcon,
  Text,
  Blockquote,
  Space
} from "@mantine/core";
import {
  IconScale,
  IconBrandGithub,
  IconSun,
  IconMoonStars,
  IconZoomQuestion
} from "@tabler/icons-react";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const { toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell>
      <AppShell.Header
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          position: "relative",
          height: "10vh"
        }}
      >
        <Container
          style={{
            gridColumn: 2,
            display: "flex",
            alignItems: "center"
          }}
        >
          <IconScale size={40} />
        </Container>
        <Flex justify="end" align="center" p={16} gap={16}>
          <ActionIcon
            size="xl"
            variant="default"
            onClick={() =>
              router.push("https://github.com/danderekma/balancing-the-scale")
            }
          >
            <IconBrandGithub />
          </ActionIcon>
          <ActionIcon size="xl" variant="default" onClick={toggleColorScheme}>
            <IconSun className={styles.light} />
            <IconMoonStars className={styles.dark} />
          </ActionIcon>
        </Flex>
      </AppShell.Header>

      <AppShell.Main
        style={{
          minHeight: "90vh"
        }}
      >
        <Container>
          <Space h="xl" />
          <Title order={2} lh="xl">
            Introduction
          </Title>
          <Text>
            “Innovation” has been at the forefront of modern technological
            products. For many companies, innovation becomes a motivational
            quality, a marketing scheme, and a means to justify any negative
            impacts their products may produce. This has been especially
            apparent for modern artificial intelligence technologies,
            specifically machine learning methods such as{" "}
            <Link href="https://chat.openai.com/">ChatGPT</Link> by OpenAI. This
            project seeks to examine the ever-so-leaning balance between seeking
            innovation and addressing the plethora of negative effects
            manifested through such process. Specifically, we attempt to provide
            a meaningful solution to the following questions:
          </Text>
          <Blockquote
            color="green"
            radius="lg"
            iconSize={42}
            icon={<IconZoomQuestion />}
            m="xl"
          >
            <Text fs="italic">
              To what extent has the development, deployment, and maintenance of
              computational methods in the recent decades, particularly machine
              learning algorithms affected the global environment? How should
              technologists ethically balance the scale between pursuing
              innovation and the subsequent environmental impact these processes
              are associated with?
            </Text>
          </Blockquote>
          <Text>
            Through the process, we will also explore previous work that
            addresses the topic by researcher and academic,{" "}
            <Link href="https://www.katecrawford.net/">Kate Crawford</Link>, and
            make efforts to provide an accurate and provoking visualization of
            the magnitude of environmental impact examples of the aforementioned
            technologies, such as ChatGPT, have with a goal of creating and
            spreading awareness to the tech community and, as an extension, the
            general public.
          </Text>
          <Space h="lg" />
          <Title order={2} lh="xl">
            Atlas of AI
          </Title>
          <Text>“Atlas of AI” by Kate Crawford</Text>
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
