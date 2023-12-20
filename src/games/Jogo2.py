import pygame
import sys
from pygame.locals import *
pygame.init()
screen = pygame.display.set_mode((960, 540))
screen.fill((255, 255, 255))
pygame.display.set_caption("Jogo")
running = True
font_title = pygame.font.Font(None, 50)
font_text = pygame.font.Font(None, 36)
clock = pygame.time.Clock()
image_path1 = r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/img/abelha.jpg'
image1 = pygame.image.load(image_path1).convert()
image1 = pygame.transform.scale(image1, (550, 300))
image_rect1 = image1.get_rect(center=screen.get_rect().center)
sound_path0 = pygame.mixer.Sound(r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/audio/cavalo.mp3')
image_path2 = r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/img/Foto0003.jpg'
image2 = pygame.image.load(image_path2).convert()
image2 = pygame.transform.scale(image2, (550, 300))
image_rect2 = image2.get_rect(center=screen.get_rect().center)
while True:
    # Seu código Python continua aqui...

    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        screen.blit(image1, image_rect1)        
        
        if event.type == pygame.KEYDOWN:
            if         event.key ==  pygame.K_UP                :
                pygame.mixer.Sound.play(sound_path0)                
                ACERTOU
            else:
                screen.blit(image2, image_rect2)                
            ERROU

    pygame.display.update()
