"use client";

import { useState, useEffect } from "react";
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
  Space,
  Tabs,
  NumberInput,
  SimpleGrid,
  ScrollArea
} from "@mantine/core";
import {
  IconScale,
  IconSun,
  IconMoonStars,
  IconZoomQuestion,
  IconBolt,
  IconRipple,
  IconHome,
  IconBucket
} from "@tabler/icons-react";
import styles from "./page.module.css";
import { Consumption } from "../types/Consumption";
import { IconCount } from "../types/IconCount";

const initialConsumption: Consumption = {
  energy: 0,
  water: 0
};

const initialIconCount: IconCount = {
  energy: 0,
  water: 0
};

export default function Home() {
  const [consumption, setConsumption] =
    useState<Consumption>(initialConsumption);
  const [iconCount, setIconCount] = useState<IconCount>(initialIconCount);
  const { toggleColorScheme } = useMantineColorScheme();

  useEffect(() => {
    const energyCounter = setInterval(() => {
      setConsumption(
        (currConsumption: Consumption): Consumption => ({
          ...currConsumption,
          energy: currConsumption.energy + 1
        })
      );
    }, 100);
    const waterCounter = setInterval(() => {
      setConsumption(
        (currConsumption: Consumption): Consumption => ({
          ...currConsumption,
          water: currConsumption.water + 0.3
        })
      );
    }, 100);
    const energyIcon = setInterval(() => {
      setIconCount(
        (currIconCount: IconCount): IconCount => ({
          ...currIconCount,
          energy: currIconCount.energy + 1
        })
      );
    }, 3000);
    const waterIcon = setInterval(() => {
      setIconCount(
        (currIconCount: IconCount): IconCount => ({
          ...currIconCount,
          water: currIconCount.water + 1
        })
      );
    }, 1635);
    return () => {
      clearInterval(energyCounter);
      clearInterval(waterCounter);
      clearInterval(energyIcon);
      clearInterval(waterIcon);
    };
  }, []);

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
            m="lg"
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
          <Text>
            <Link href="https://www.katecrawford.net/index.html">
              “Atlas of AI”
            </Link>{" "}
            by Kate Crawford provides a critical and comprehensive examination
            of artificial intelligence’s social, political, and economic
            impacts. She argues in her work that AI technologies must not simply
            be seen as innovative tools but also as an incredibly intricate and
            complex system that involves the utilization of natural and human
            resources. So much so that without such involvement, these systems
            would not be able to exist or function in any meaningful way.
          </Text>
          <Space h="lg" />
          <Text>
            We will primarily focus on the environmental aspects of Crawford’s
            critique. In the chapter named “Earth”, Crawford highlights the
            undeniable connection between the origins of Silicon Valley and by
            extension the tech scene in Northern California and the extraction
            of minerals such as lithium in nearby mines, many of which have been
            depleted of its resources. She also emphasizes the importance of
            these metals and minerals as an integral part of the development and
            deployment of AI systems as, for example, “rechargeable lithium-ion
            batteries are essential for mobile devices and laptops, in-home
            digital assistants, and data center backup power”. More importantly,
            Crawford emphasizes the idea that the ignorance of the supply chain
            is woven into the fabrics of capitalism and the there exists a
            strong sense of deniability of unsustainable and harmful extraction
            practices on the part of many large tech companies. Worse still,
            these issues extend beyond being purely domestic. Similar patterns
            of extraction have been identified in China, Indonesia, and the
            Republic of the Congo as companies move their supply chains
            overseas. Crawford’s dialogue on the environmental detriments AI
            systems produce portrays a incredibly thought-evoking narrative
            behind the highly innovative and attractive facade tech companies
            characterize their products with.
          </Text>
          <Space h="lg" />
          <Title order={2} lh="xl">
            Visualization
          </Title>
          <Text>
            The following visualization tool aims to provide a rough estimate of
            ChatGPT’s energy and water expenditures in real time starting from
            when the user loads the page.
          </Text>
          <Space h="lg" />
          <Tabs color="green" defaultValue="energy">
            <Tabs.List>
              <Tabs.Tab value="energy" leftSection={<IconBolt size={20} />}>
                Energy
              </Tabs.Tab>
              <Tabs.Tab value="water" leftSection={<IconRipple size={20} />}>
                Water
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="energy" p="lg">
              <Title order={3} lh="xl">
                Energy
              </Title>
              <Text>
                With hundreds of millions of daily queries, a University of
                Washington assistant professor of electrical and computer
                engineering,{" "}
                <Link href="https://people.ece.uw.edu/moazeni_sajjad/?_gl=1*10jft81*_ga*MTU1NDU5NTc2MC4xNzAyNjAzODQx*_ga_JLHM9WH4JV*MTcwMjYwMzg0MC4xLjAuMTcwMjYwMzg0My4wLjAuMA..*_ga_3T65WK0BM8*MTcwMjYwMzg0MC4xLjAuMTcwMjYwMzg0My4wLjAuMA..">
                  Sajjad Moazeni
                </Link>
                , estimates{" "}
                <Link href="https://www.washington.edu/news/2023/07/27/how-much-energy-does-chatgpt-use/">
                  this many queries can cost around 1 GWh each day
                </Link>
                .
              </Text>
              <Space h="md" />
              <Container size={300}>
                <NumberInput
                  readOnly
                  thousandSeparator
                  value={consumption.energy}
                  styles={{
                    label: {
                      width: "100%",
                      textAlign: "center"
                    },
                    description: {
                      width: "100%",
                      textAlign: "center"
                    },
                    input: {
                      textAlign: "center"
                    }
                  }}
                  label="Electricity Consumption"
                  description="Consumption measured in kWh"
                />
              </Container>
              <Space h="lg" />
              <Text>
                The following is a live depiction of ChatGPT’s energy
                consumption, with each{" "}
                <IconHome
                  style={{
                    verticalAlign: "middle"
                  }}
                />{" "}
                representing the amount of energy spent by an average American
                household per day.{" "}
                <Link href="https://www.eia.gov/tools/faqs/faq.php?id=97&t=3">
                  (29 kWh)
                </Link>
              </Text>
              <Space h="lg" />
              <ScrollArea.Autosize
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: 5
                }}
                mih={60}
                mah={400}
                type="always"
                scrollbars="y"
                p="md"
                mx="md"
              >
                <SimpleGrid cols={20}>
                  {new Array(iconCount.energy).fill(<IconHome />)}
                </SimpleGrid>
              </ScrollArea.Autosize>
            </Tabs.Panel>
            <Tabs.Panel value="water" p="lg">
              <Title order={3} lh="xl">
                Water
              </Title>
              <Text>
                <Link href="https://shaoleiren.github.io/">Shaolei Ren</Link>,
                an Associate Professor of Electrical and Computer Engineering
                with the University of California, Riverside, estimated in his
                paper titled{" "}
                <Link href="https://arxiv.org/abs/2304.03271">
                  “Making AI Less “Thirsty”: Uncovering and Addressing the
                  Secret Water Footprint of AI Models”
                </Link>{" "}
                that ChatGPT utilizes roughly 500 milliliters of water for a
                series of between 5 to 50 prompts. For the water visualizations
                below, we utilized an estimate of 100 million queries/prompts
                per day to provide an uniform comparison with the energy
                visualizations.
              </Text>
              <Space h="md" />
              <Container size={300}>
                <NumberInput
                  readOnly
                  thousandSeparator
                  value={consumption.water.toFixed(1)}
                  styles={{
                    label: {
                      width: "100%",
                      textAlign: "center"
                    },
                    description: {
                      width: "100%",
                      textAlign: "center"
                    },
                    input: {
                      textAlign: "center"
                    }
                  }}
                  label="Water Consumption"
                  description="Consumption measured in gal"
                />
              </Container>
              <Space h="lg" />
              <Text>
                The following is a live depiction of ChatGPT’s water
                consumption, with each{" "}
                <IconBucket
                  style={{
                    verticalAlign: "middle"
                  }}
                />{" "}
                representing a 5-gallon bucket.
              </Text>
              <Space h="lg" />
              <ScrollArea.Autosize
                style={{
                  border: "1px solid #ced4da",
                  borderRadius: 5
                }}
                mih={60}
                mah={400}
                type="always"
                scrollbars="y"
                p="md"
                mx="md"
              >
                <SimpleGrid cols={20}>
                  {new Array(iconCount.water).fill(<IconBucket />)}
                </SimpleGrid>
              </ScrollArea.Autosize>
            </Tabs.Panel>
          </Tabs>
          <Space h="md" />
          <Title order={2} lh="xl">
            Takeaway
          </Title>
          <Text>
            It is important to recognize that the goal of this project is not to
            undermine the efforts and time many tech companies such as OpenAI
            have put forth into developing and producing these innovative
            products and technologies. This project does, however, aim to spread
            awareness and engage dialogue within the tech community regarding
            the environmental impacts these products may carry. If you’ve
            happened to stumble across this page, I highly urge you to apply the
            knowledge you’ve acquired in the aforementioned manner so that we
            may hope to balance the scale between pursuing innovation and saving
            our home.
          </Text>
          <Space h={100} />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}
