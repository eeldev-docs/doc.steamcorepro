---
sidebar_position: 3
---

# Epic Online Services Crossplay

Add crossplay between the Steam and Epic Games Store versions of your game with [CrossplayCore](https://crossplaycore.eeldev.com/), a separate eelDev plugin that works alongside SteamCore PRO. Steam players use their Steam account to sign in to Epic Online Services (EOS) through EOS Connect. Players who launch from the Epic Games Store can sign in with their Epic account. Both groups can find and join the same EOS lobbies and play together in matches over EOS P2P.

## Setting up crossplay

1. Enable CrossplayCore alongside SteamCore PRO and configure your own Steam App ID. [Steam setup for SteamCore PRO](https://crossplaycore.eeldev.com/docfiles/getting_started/steam-setup#with-steamcore-pro-recommended)
2. Configure the Steam and Epic Games identity providers in the EOS Developer Portal. Point both store builds at the same EOS deployment so they can find each other's lobbies. [EOS setup](https://crossplaycore.eeldev.com/docfiles/getting_started/eos-setup)
3. Use CrossplayCore's Blueprint nodes to log in, create or join an EOS lobby, and start the match. The Quick Start includes Blueprint graphs for each step. [CrossplayCore Quick Start](https://crossplaycore.eeldev.com/docfiles/getting_started/quick-start)
