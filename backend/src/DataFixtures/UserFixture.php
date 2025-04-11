<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixture extends Fixture
{
    public function __construct(private UserPasswordHasherInterface $passwordHasher) {}

    public function load(ObjectManager $manager): void
    {
        // Add a new user
        $user = new User();
        $user->setName('Admin User');
        $user->setEmail('admin@creativelid.com');
        $user->setRoles(['ROLE_USER']);
        $password = $_ENV['DEFAULT_USER_PASSWORD'] ?? 'devpassword';
        $user->setPassword(
            $this->passwordHasher->hashPassword($user, $password)
        );

        $manager->persist($user);
        $manager->flush();
    }
}
