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
sound_path0 = pygame.mixer.Sound(r'/Users/gabrielcarneiro/Documents/GitHub/grupo4/src/games/audio/cavalo.mp3')
while True:
    # Seu código Python continua aqui...

    for event in pygame.event.get():

        if event.type == pygame.QUIT:
            pygame.quit()
            exit()
        
        if event.type == pygame.KEYDOWN:
            if         event.key ==  pygame.K_UP                :
                pygame.mixer.Sound.play(sound_path0)                

    pygame.display.update()
