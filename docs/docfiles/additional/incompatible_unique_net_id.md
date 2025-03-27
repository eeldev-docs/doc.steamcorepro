---
sidebar_position: 10
---

# incompatible_unique_net_id

:::tip NOTE
incompatible_unique_net_id is an error that will appear when running two different OSS (OnlineSubsystem), sometimes you might want to have a dedicated server use the regular Null OnlineSubsystem while clients use the Steam OSS (to have steam functionality on clients), you can bypass this check by overriding the “PreLogin” function inside your GameMode.
::: 

You’ll have to dive into C++ to override this function as it cant be done in blueprints, but here is an example of what the two files can look like this, 
   
## BaseGameMode.h
```cpp
// Copyright (C) eelDev 2017-2021

#pragma once
 
#include "CoreMinimal.h"
#include "GameFramework/GameMode.h"
#include "BaseGameMode.generated.h" 

UCLASS()    
class ABaseGameMode : public AGameMode  
{
	GENERATED_BODY()  
public:
	virtual void PreLogin(const FString& Options, const FString& Address, const FUniqueNetIdRepl& UniqueId, FString& ErrorMessage) override;
};
```

## BaseGameMode.cpp
```cpp
// Copyright (C) eelDev 2017-2021

#include "BaseGameMode.h"
#include "GameFramework/GameSession.h" 

void ABaseGameMode::PreLogin(const FString& Options, const FString& Address, const FUniqueNetIdRepl& UniqueId, FString& ErrorMessage)
{
	// override net id check
	
	ErrorMessage = GameSession->ApproveLogin(Options);
	FGameModeEvents::GameModePreLoginEvent.Broadcast(this, UniqueId, ErrorMessage);
}
```

After creating the two files you’ll need to recompile your project and re-parent your Blueprint GameMode to the “BaseGameMode” class.

You should now be able to mix two different subsystems.