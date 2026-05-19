# Keryx AI

Keryx AI is an AI readiness audit platform for checking AI assistants and chatbots before launch. It helps teams find errors, unsafe behavior, and launch risks before real users rely on the bot.

## Project Description

Keryx AI is a project in the field of artificial intelligence focused on pre-launch testing for AI assistants and chatbots. The main idea is to help teams identify mistakes and risks in AI bot behavior before those bots are used by real people.

Many companies, educational platforms, startups, and services now deploy AI chatbots in customer support, learning, finance, public services, and other domains. These bots can still produce incorrect or dangerous answers, hallucinate facts, reveal hidden instructions, fail under prompt injection, or respond inconsistently in Russian and Kazakh. This can damage user trust, create reputational risk, and lead to poor decisions.

Keryx AI addresses this through a readiness audit system. The platform tests bot answers across several areas: prompt injection, system instruction leakage, hallucinations, dangerous advice, alignment with source documents, Kazakh language quality, and semantic consistency between Russian and Kazakh answers.

After the audit, the system produces a readiness score, highlights detected risks, groups findings by severity, and creates a report with recommendations for fixing the issues. The project also includes LLM-based semantic review, human review, and PDF report generation.

Keryx AI is built with Kazakhstan's context in mind: bilingual AI services, Kazakh-language answer quality, and safer AI deployment for the local market. The goal is not to promise absolute AI safety, but to help teams identify risks before launch and make more informed decisions.

## What It Tests

- Prompt injection and jailbreak attempts
- System instruction leakage
- Hallucinations and unsupported claims
- Dangerous or unqualified advice
- Document-grounded answer quality
- Kazakh-language quality
- Russian/Kazakh semantic consistency
- Readiness scoring and severity-based findings

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```
