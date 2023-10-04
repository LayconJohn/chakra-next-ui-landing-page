'use client'

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaNetworkWired } from "react-icons/fa6"
import { IoAnalyticsSharp, IoShieldCheckmarkSharp } from 'react-icons/io5'
import { ReactElement } from 'react'

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Nossas Soluções
          </Text>
          <Heading>Levando suas empresas a outro nível de segurança</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Entregando conectividade de dados, voz e vídeo; segurança nas redes, dispositivos e dados trafegados além da ampla e contínua continuação no ambiente corporativo.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'white.500'} w={5} h={5} />}
              iconBg={useColorModeValue('blue.100', 'blue.900')}
              text={'Infraestrutura'}
            />
            <Feature
              icon={<Icon as={IoShieldCheckmarkSharp} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Cibersegurança'}
            />
            <Feature
              icon={<Icon as={FaNetworkWired} color={'white.500'} w={5} h={5} />}
              iconBg={useColorModeValue('orange.100', '#FF7E00.900')}
              text={'Comunicação'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              './imagem-redes-teste.jpg'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}